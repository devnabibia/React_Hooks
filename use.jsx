import { useState, useEffect} from 'react'

//Our custom Hook
function useFriendStatus(friendID) { const [isOnline, setISOnline] = useState(null);

useEffect(() => {
    function handleStatusChange(status) {
        setISOnline(status.isOnline);
    }
    ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
    return () => {
        ChatAPI.unsubscribeToFriendStatus(friendID, handleStatusChange)
    };
});
return isOnline;
}