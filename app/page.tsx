import Hello from "./components/hello";
export default function Home() {
  console.log("WHO AM I? -- SERVER/CLIENT");

  return (
    <>
      <h1 className="text-3xl">Sagar - Next.Js</h1>
      <Hello />
    </>
  );
}
