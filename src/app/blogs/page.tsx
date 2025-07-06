import BlogList from "./[objectId]/_components/BlogList";
import Jumbotron from "./[objectId]/_components/Jumbotron";

export default function Home() {
  return (
    <main className="container mx-auto w-full px-4 md:px-16 py-8 space-y-12">
      <Jumbotron />
      <BlogList />
    </main>
  );
}
