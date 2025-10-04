import React from 'react';

// CSS for the marquee animation
const animationStyle = `
  @keyframes marquee {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
`;

const reviews = [
  {
    id: 1,
    name: 'Sai Kumar',
    rating: 5,
    avatar: 'https://placehold.co/100x100/A1C4FD/FFFFFF?text=SK',
    review: 'Had great taste and received in a very short time and very good packaging. Very happy to buy tulasi pickles on orders.',
  },
  {
    id: 2,
    name: 'Krishan Wc',
    rating: 5,
    avatar: 'https://placehold.co/100x100/FAD7A1/FFFFFF?text=KW',
    review: 'Purchased prawn pickle, gongura chicken, chicken and mutton pickles for family. Tastes better with rice or tiffin items or curd rice and it is to be appreciated.',
  },
  {
    id: 3,
    name: 'Sandra Sudheer Kumar',
    rating: 5,
    avatar: 'https://placehold.co/100x100/FFC0CB/FFFFFF?text=SS',
    review: 'Very tasty and yummy pickles. Packing also very good. Delivered on time. Keep it up and all the best',
  },
  {
    id: 4,
    name: 'Sai Kiran Bijja',
    rating: 5,
    avatar: 'https://placehold.co/100x100/E1BEE7/FFFFFF?text=SB',
    review: 'Right from the start to end all the conversation over the phone is impressive and taste is authentic, all i have done is just transferred the money and updated the order, order received in a well packed state without any spills and non veg pickles are awesome .',
  },
  {
    id: 5,
    name: 'Vinay',
    rating: 5,
    avatar: 'https://placehold.co/100x100/90EE90/FFFFFF?text=JD',
    review: 'Very tasty and hygienic packing. Very much satisfied. Ordered for my parents in law and they loved it. Reordering again in a month. Keep up the good work.',
  },
];

const CustomerReviews = () => {
  return (
    <section className="py-16 bg-white">
      <style>{animationStyle}</style>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-700">Our Customers Love</h2>
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#282561] mt-2">Entho Ruchira's Pickles</h1>

        <div className="mt-12 overflow-hidden relative">
          <div className="flex w-fit animate-[marquee_30s_linear_infinite]">
            {[...reviews, ...reviews].map((review, index) => (
              <div key={index} className="flex-shrink-0 w-80 md:w-96 p-4">
                <div className="bg-gray-100 rounded-lg p-8 shadow-md border border-gray-200 h-full flex flex-col items-center justify-center text-center">
                  <div className="flex items-center justify-center mb-4">
                    <img src={review.avatar} alt={review.name} className="w-16 h-16 rounded-full mr-4" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">{review.name}</h3>
                      <div className="flex items-center justify-center">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className={`w-4 h-4 ${i < review.rating ? 'text-[#fdc58a]' : 'text-gray-400'}`} fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.62-.921 1.902 0l1.286 3.955a1 1 0 00.95.691h4.15c.969 0 1.371 1.24.588 1.81l-3.36 2.449a1 1 0 00-.364 1.118l1.286 3.955c.3.921-.755 1.683-1.54 1.118L10 16.035l-3.36 2.449c-.785.572-1.84-.197-1.54-1.118l1.286-3.955a1 1 0 00-.364-1.118L2.052 9.383c-.783-.57-.381-1.81.588-1.81h4.15a1 1 0 00.95-.691l1.286-3.955z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm italic">{review.review}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
