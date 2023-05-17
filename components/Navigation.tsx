import Image from 'next/image';
import Link from 'next/link';

export default function Navigation() {
  return (
    <div className="flex items-center justify-center">
      <Image
        src="/tr_logo.png"
        width={40}
        height={40}
        alt="True Reality Logo"
      />
      <ul className="flex ">
        <li>
          <Link href="/masters">Майстри</Link>
        </li>
        <li>
          <Link href="/masters">Розклад</Link>
        </li>
        <li>
          <Link href="/masters">Місце</Link>
        </li>
        <li>
          <Link href="/masters">Контакти</Link>
        </li>
      </ul>
    </div>
  );
}
