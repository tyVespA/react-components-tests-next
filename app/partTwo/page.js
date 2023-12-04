import React from "react";
import Link from "next/link";

function Page() {
  return (
    <main>
      <h1>Part Two</h1>
      <div className="exercisesContainer">
        <section>
          <h2>Title</h2>
          <ul>
            <Link href="/partTwo/">
              <li>Ex. title</li>
            </Link>
            <Link href="/partTwo/">
              <li>Ex. title</li>
            </Link>
          </ul>
        </section>
      </div>
    </main>
  );
}

export default Page;
