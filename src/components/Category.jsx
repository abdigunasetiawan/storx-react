import React from "react";

function Category() {
  const categoryData = [
    {
      imgSrc: "img/category/jewelery.webp",
      imgAlt: "Jewelery",
      label: "Jewelery",
      href: "/category/jewelery",
    },
    {
      imgSrc: "img/category/electronics.webp",
      imgAlt: "Electronics",

      label: "Electronic",
      href: "/category/electronics",
    },
    {
      imgSrc: "img/category/mens-clothing.webp",
      imgAlt: "Men's Clothing",

      label: "Mens Clothing",
      href: "/category/men's-clothing",
    },
    {
      imgSrc: "img/category/womens-clothing.webp",
      imgAlt: "Women's Clothing",
      label: "Womens Clothing",
      href: "/category/women's-clothing",
    },
  ];

  return (
    //  Category
    <section
      id="category"
      className="mt-6"
    >
      <div className="container mx-auto px-4 md:px-8 xl:px-16">
        <h2 className="text-center text-lg font-bold text-slate-800">Category</h2>

        <div className="mt-4 flex flex-wrap justify-between gap-y-2.5">
          {categoryData.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="product-category group relative flex aspect-[2/1] w-[48%] items-center justify-center overflow-hidden rounded-lg shadow-sm after:absolute after:inset-0 after:z-10 after:block after:bg-black/50 lg:w-[24%]"
            >
              <span className="absolute z-20 font-semibold text-white">{item.label}</span>
              <img
                className="h-full w-full object-cover transition-transform duration-300 hover:transition-transform hover:duration-300 group-hover:scale-110"
                src={item.imgSrc}
                alt={item.imgAlt}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
    //  Category
  );
}

export default Category;
