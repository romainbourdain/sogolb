"use client";

import { getEvents } from "@/actions/profile.action";
import { Event, User } from "@prisma/client";
import { useCallback, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import ProfileEvents from "../profile/profile-events";

export type InfiniteEventsScrollProps = {
    initialEvents: Event[];
    user: User;
};

const EVENT_PER_REQUEST = 1;

const InfiniteEventsScroll = ({ initialEvents, user }: InfiniteEventsScrollProps) => {
    const [events, setEvents] = useState(initialEvents);
    const [offset, setOffset] = useState(initialEvents.length);
    const [isLoading, setIsLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const [error, setError] = useState(null);
    const { ref, inView } = useInView({ threshold: 1 });

    const loadMoreEvents = useCallback(async () => {
        if (isLoading || !hasMore) return;
        setIsLoading(true);
        setError(null);

        const newEvents = await getEvents(user, offset, EVENT_PER_REQUEST);
        if (newEvents.length < EVENT_PER_REQUEST) {
            setHasMore(false);
        }
        setEvents((prevEvents) => [...prevEvents, ...newEvents]);
        setOffset((prevOffset) => prevOffset + newEvents.length);

        setIsLoading(false);

    }, [offset, isLoading, hasMore]);

    useEffect(() => {
        if (inView && hasMore) {
            console.log("Load more events");
            loadMoreEvents();
        }
    }, [inView, loadMoreEvents, hasMore]);

    return (
        <div>
            <ProfileEvents events={events} profilePicture={user.image} profileName={user.name} />
            <div ref={ref} className="animate-pulse">
                {isLoading && <p>Loading...</p>}
                {error && <p className="error-message">{error}</p>}
                {!hasMore && <p>No more events to load.</p>}
            </div>
        </div>
    );
};

export default InfiniteEventsScroll;
