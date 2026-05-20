import React, {
  useEffect,
} from "react";

import { useQuery } from "@tanstack/react-query";

import { useAppStore } from "../store/useAppStore";

const fetchCollaborators =
  async () => {
    const response =
      await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

    return response.json();
  };

const Collaborators: React.FC =
  () => {
    const collaborators =
      useAppStore(
        (s) => s.collaborators
      );

    const setCollaborators =
      useAppStore(
        (s) => s.setCollaborators
      );

    const { data, isLoading } =
      useQuery({
        queryKey: [
          "collaborators",
        ],

        queryFn:
          fetchCollaborators,
      });

    useEffect(() => {
      if (data) {
        setCollaborators(data);
      }
    }, [data, setCollaborators]);

    if (isLoading) {
      return <p>Loading...</p>;
    }

    return (
      <div>
        <h2>Collaborators</h2>

        <ul>
          {collaborators.map(
            (user) => (
              <li key={user.id}>
                {user.name}
              </li>
            )
          )}
        </ul>
      </div>
    );
  };

export default Collaborators;