import React from "react";
import NewsCard from "../components/NewsCard";
import MatchList from "../components/MatchList";
import PlayerList from "../components/PlayerList";

export default function Home() {
  return (
    <div>
      <h1>Bem-vindo ao TricolorPaulista!</h1>
      <NewsCard />
      <MatchList />
      <PlayerList />
    </div>
  );
}
