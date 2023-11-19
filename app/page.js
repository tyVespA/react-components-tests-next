import styles from "./page.module.css";
import Link from "next/link";
import ModuleCard from "./components/ModuleCard";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>123</h1>
      <div className={styles.cardContainer}>
        <Link href="/partOne">
          <ModuleCard title="Part One">
            Components, mapping over data, conditional rendering{" "}
          </ModuleCard>
        </Link>
        <Link href="/partOne">
          <ModuleCard title="test1">test2</ModuleCard>
        </Link>
        <Link href="/partOne">
          <ModuleCard title="test1">test2</ModuleCard>
        </Link>
        <Link href="/partOne">
          <ModuleCard title="test1">test2</ModuleCard>
        </Link>
        <Link href="/partOne">
          <ModuleCard title="test1">test2</ModuleCard>
        </Link>
      </div>
    </main>
  );
}
