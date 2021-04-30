import React, { createContext, ReactNode, useState } from 'react';
import { Email } from '../screens/Home/styles';
import api from '../services/api';


interface Profile {
    name?: string;
    email?: string;
    login: string;
    id: number;
    avatar_url: string;
    location?: string;
    followers: number;
    following: number;
    public_repos: number;
    bio?: string;
}

interface Repository {
    id: number;
    name: string;
    stargazers_count: number;
    description?: string;
}

interface Followers {
    id: number;
    login: string;
    avatar_url: string;
}

interface Following {
    id: number;
    login: string;
    avatar_url: string;
}

interface UserProviderData {
    user: Profile[];
    repos: Repository[];
    followers: Followers[];
    following: Following[];
    loading: boolean;
    signIn: (arg: string) => void;
}

interface UserProviderProps {
    children: ReactNode;
}

export const UserContext = createContext({} as UserProviderData);

export function UserProvider({ children }: UserProviderProps) {


    const [user, setUser] = useState<Profile[]>([]);
    const [repos, setRepos] = useState<Repository[]>([]);
    const [followers, setFollowers] = useState<Followers[]>([]);
    const [following, setFollowing] = useState<Following[]>([]);
    const [loading, setLoading] = useState(false);

    async function signIn(username: string) {

        setLoading(true);
        const responseProfile = await api.get(`/users/${username}`);
        const responseRepos = await api.get(`/users/${username}/repos`);
        const responseFollowers = await api.get(`/users/${username}/followers`);
        const responseFollowing = await api.get(`/users/${username}/following`);

        setUser([responseProfile.data]);
        setRepos(responseRepos.data);
        setFollowers(responseFollowers.data);
        setFollowing(responseFollowing.data);
        setLoading(false);
    }

    return (
        <UserContext.Provider value={{ signIn, user, repos, followers, following, loading }}>
            { children}
        </UserContext.Provider >
    )


}

