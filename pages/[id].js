// pages/[id].js
import { useRouter } from "next/router";
import Image from "next/image";
import styles from "@/styles/Home.module.css";


const ImageDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  // Fetch image details based on the id (you can replace this with your logic)
  const imageDetails = {
    id: '1',
    path: 'lap13.jpg',
    name: 'Laptop HP 2023',
    description: 'Core i5 10Gen 16GB SSD Windows 11 operating system',
  };

  return (
    <>
    
      <main className={`${styles.main} ${inter.className}`}>
        <Layout />
        <div className={styles.container}>
          <div className={styles.imageDetail}>
            <Image src={imageDetails.path} alt={imageDetails.name} width={600} height={400} />
            <h2>{imageDetails.name}</h2>
            <p>{imageDetails.description}</p>
          </div>
        </div>
      </main>
    </>
  );
};

export default ImageDetails;
