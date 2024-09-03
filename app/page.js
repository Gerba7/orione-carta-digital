import styles from "./page.module.css";
import Alcohol from "./ui/components/Alcohol/Alcohol";
import Coffee from "./ui/components/Coffee/Coffee";
import Desserts from "./ui/components/Desserts/Desserts";
import Drinks from "./ui/components/Drinks/Drinks";
import Section from "./ui/components/Home/Section/Section";
import Mains from "./ui/components/Mains/Mains";
import Navbar from "./ui/components/Navbar/Navbar";
import Salads from "./ui/components/Salads/Salads";
import Starters from "./ui/components/Starters/Starters";
import Top from "./ui/components/Top/Top";



export default async function Home() {

  const res = await fetch("http://localhost:3001/api/categories", {
    cache: 'no-store',
    next: {
      tags: ['categories']
    }
  });

  const categories = (await res.json()).sort((a, b) => a.order - b.order);

  return (
    <main className={styles.main}>
      <Top />
      <Navbar categories={categories} />
      {categories?.map((category) => {
        return (
          <Section key={category._id} category={category} />
        )
      })}
    </main>
  );
}
