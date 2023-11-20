import React from "react";
import Link from "next/link";

function Page() {
  return (
    <main>
      <h1>Part One</h1>
      <div className="exercisesContainer">
        <section>
          <h2>Components</h2>
          <ul>
            <Link href="/partOne/01-contactCard">
              <li>Contact card</li>
            </Link>
            <Link href="/partOne/02-button">
              <li>Button</li>
            </Link>
          </ul>
        </section>
        <section>
          <h2>Iteration</h2>
          <ul>
            <Link href="/partOne/03-avatar">
              <li>Avatar selection</li>
            </Link>
            <Link href="/partOne/04-shoppingCart">
              <li>Shopping cart</li>
            </Link>
          </ul>
        </section>
      </div>
    </main>
  );
}

export default Page;
