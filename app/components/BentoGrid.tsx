import * as motion from "motion/react-client";



const items = [
    {
      id: 1,
      image: "/me.jpg",
      title: "RIDGEWAY",
      year: "2024",
      className: "custom:grid col-span-2 row-span-2 place-content-start custom:mb-28  mb-16",
      height: "custom:h-[42rem] custom:w-[32rem] h-[20rem] w-full", // 500px to rem
    },
    {
      id: 2,
      image: "/me.jpg",
      title: "GARRISON & CO",
      year: "2023",
      className: "col-span-1 custom:grid row-span-1 place-content-center custom:mb-28 mb-16",
      height: "custom:h-[18rem] custom:w-[26rem] h-[20rem] w-full", // 250px to rem
    },
    {
      id: 3,
      image: "/me.jpg",
      title: "REBOOK",
      year: "2023",
      className: "custom:grid col-span-3 row-span-1 place-content-center w-full  custom:mb-28 mb-16",
      height: "custom:h-[28rem] custom:w-[35rem] h-[20rem] w-full", // 250px to rem
    },
    {
      id: 4,
      image: "/me.jpg",
      title: "EMBERLY",
      year: "2023",
      className: "col-span-1 row-span-2 custom:grid place-content-start  custom:mb-28 mb-16",
      height: "custom:h-[32rem] custom:h-[20rem] w-full", // 500px to rem
    },
    {
      id: 5, 
      image: "/me.jpg",
      title: "HIVE",
      year: "2023",
      className: "col-span-2 row-span-2 custom:grid place-content-end  custom:mb-28 mb-16",
      height: "custom:h-[42rem] custom:w-[32rem] h-[20rem] w-full", // 500px to rem
    },
    {
      id: 6,
      image: "/me.jpg",
      title: "APEX",
      year: "2023",
      className: "col-span-2 row-span-1 mb-28 custom:grid",
      height: "custom:h-[30rem] custom:w-[30rem] h-[20rem] w-full custom:mb-20 ", // 250px to rem
    },
  ];
  
  const GridItem = ({ item, index }: { item: typeof items[0]; index: number }) => {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className={`relative overflow-hidden  ${item.className}`}
      >
        <div className={`group relative w-full  ${item.height}`}>
          <div className="absolute inset-0 bg-black/5 transition-colors duration-300 group-hover:bg-black/10" />
          <img
            src={item.image}
            alt={item.title}
            className="h-full w-full object-cover transition-transform duration-300 will-change-transform group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <div className="flex items-center justify-between">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                className="text-xs font-medium text-white"
              >
                {item.title}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
                className="text-xs font-medium text-white"
              >
                {item.year}
              </motion.p>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };
  
  export const BentoGrid = () => {
    return (
      <div className="w-full   custom:grid grid-cols-3 gap-4 md:grid-cols-4 ">
        {items.map((item, index) => (
          <GridItem key={item.id} item={item} index={index} />
        ))}
      </div>
    );
  };