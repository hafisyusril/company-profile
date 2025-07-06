import { Input } from "@/components/ui/input";

const Jumbotron = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center h-[30vh] gap-4 px-4">
      <h1 className="text-4xl md:text-6xl font-bold">Blog HORE</h1>
      <p>Coffee, Travel, and Food.</p>
      <Input type="text" placeholder="Search..." className="max-w-md" />
    </section>
  );
};

export default Jumbotron;
