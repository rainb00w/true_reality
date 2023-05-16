import Image from 'next/image';

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
        <li>Майстри</li>
        <li>Розклад</li>
        <li>Місце</li>
        <li>Контакти</li>
      </ul>
    </div>
  );
}
