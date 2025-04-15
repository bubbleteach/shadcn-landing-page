import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "About",
};
export default function About() {
  return (
    <>
      <main className="container prose  mx-auto w-full">
        <div>
          <h1>About</h1>
          <p>
            GrimoAI is an AI Research and Software Development company. Our
            mission is to foster better expression and communication.
          </p>
          {/* <TeamSection /> */}
        </div>
      </main>
    </>
  );
}
