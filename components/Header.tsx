import Navigation from './Navigation';

export default function Header() {
  return (
    <div className="bg-[url('../public/hero.jpeg')] min-h-[400px] bg-no-repeat bg-cover">
      <Navigation />
      <p>some text</p>
    </div>
  );
}
