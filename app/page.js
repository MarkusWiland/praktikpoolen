import InternshipCategory from "@/components/internshipCategory/page";
import { UserButton } from "@clerk/nextjs";
const InternshipCategoryData = [
  {
    link: "/kategori/it",
    title: "IT/Teknik",
    description: "texten för ifnormation",
    image: "/bg.jpg",
  },
  {
    link: "/kategori/ekonomi",
    title: "Ekonomi",
    description: "texten för ifnormation",
    image: "/bg.jpg",
  },
  {
    link: "/kategori/bygg",
    title: "Byggbranchen",
    description: "texten för ifnormation",
    image: "/bg.jpg",
  },
];
export default async function Home() {

  return (
    <main className="h-screen relative">
      <div
        style={{
          backgroundImage: 'url("/bg.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.5,
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          backgroundColor: "#000000",
          width: "100%",
          zIndex: -10, // Placera bakgrundsbilden bakom allt annat innehåll
        }}
      />

      <section className="h-full flex flex-col items-center justify-center">
        <div className="max-w-2xl">
      <div>       <UserButton afterSignOutUrl="/" /></div>

          <h1 className="text-6xl font-bold">PraktikPlats.se</h1>
          <p className="text-xl">
            Hjälper elever, studenter, utbildningsanordnare och arbetsgivare att
            hitta varandra. Här kan du söka, samordna eller erbjuda
            praktikplats, feriepraktik eller arbetsmarknadspraktik.{" "}
          </p>
          <div className="flex flex-row gap-4 py-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Sök Praktikplats
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Erbjud Praktikplats
            </button>
          </div>
        </div>
      </section>
      <section className="flex flex-col max-w-[1100px] mx-auto py-10">
        <h1 className="text-4xl font-bold text-center pb-10">Praktikplatser</h1>
        <div className="grid grid-cols-3 gap-4">
          {InternshipCategoryData.map((category) => (
            <InternshipCategory category={category} />
          ))}
        </div>
      </section>
    </main>
  );
}
