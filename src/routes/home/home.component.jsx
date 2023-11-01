import Directory from "../../components/directory/directory.component";
function Home() {
  const categories = [
    {
      id: 1,
      title: "Hats",
      imageUrl: "https://i.postimg.cc/d0c5RfSB/hats.jpg",
    },
   
    
    {
      id: 2,
      title: "Decors",
      imageUrl: "https://i.postimg.cc/DzSBmFgD/images.jpg",
    },
    {
      id: 3,
      title: "Jewels",
      imageUrl: "https://i.postimg.cc/Bn6H1ST4/download-1.jpg",
    },
    {
      id: 4,
      title: "Jackets",
      imageUrl: "https://i.postimg.cc/Y9p8ZW7L/jackets.jpg",
    },
  ];

  return (
    <div>
      <Directory categories={categories} />
    </div>
  );
}

export default Home;
