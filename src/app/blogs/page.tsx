import BlogList from "./[objectId]/_components/BlogList";
import Jumbotron from "./[objectId]/_components/Jumbotron";

export default function Home() {
  return (
    <main className="container mx-auto px-4">
      <Jumbotron />
      <BlogList />
    </main>
  );
}
