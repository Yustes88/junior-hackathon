import shuffle from "@/utils/utils"
import Image from "next/image"

const images = [
    {
      title: 'Request time off',
      imgHref: 'https://picsum.photos/500',
      imageAlt: 'Image info'
    },
    {
      title: 'Request time off',
      imgHref: 'https://picsum.photos/501',
      imageAlt: 'Image info'
    },
    {
      title: 'Request time off',
      imgHref: 'https://picsum.photos/502',
      imageAlt: 'Image info'
    },
    {
      title: 'Request time off',
      imgHref: 'https://picsum.photos/503',
      imageAlt: 'Image info'
    },
    {
      title: 'Request time off',
      imgHref: 'https://picsum.photos/504',
      imageAlt: 'Image info'
    },
    {
      title: 'Request time off',
      imgHref: 'https://picsum.photos/505',
      imageAlt: 'Image info'
    },
    {
      title: 'Request time off',
      imgHref: 'https://picsum.photos/506',
      imageAlt: 'Image info'
    },
    {
      title: 'Request time off',
      imgHref: 'https://picsum.photos/507',
      imageAlt: 'Image info'
    },
    {
      title: 'Request time off',
      imgHref: 'https://picsum.photos/508',
      imageAlt: 'Image info'
    },
    {
      title: 'Request time off',
      imgHref: 'https://picsum.photos/509',
      imageAlt: 'Image info'
    },
    {
      title: 'Request time off',
      imgHref: 'https://picsum.photos/510',
      imageAlt: 'Image info'
    },
    {
      title: 'Request time off',
      imgHref: 'https://picsum.photos/511',
      imageAlt: 'Image info'
    },
    {
      title: 'Request time off',
      imgHref: 'https://picsum.photos/512',
      imageAlt: 'Image info'
    },
    {
      title: 'Request time off',
      imgHref: 'https://picsum.photos/513',
      imageAlt: 'Image info'
    },
    {
      title: 'Request time off',
      imgHref: 'https://picsum.photos/514',
      imageAlt: 'Image info'
    },
    {
      title: 'Request time off',
      // imgHref: 'https://picsum.photos/500',
      imageAlt: 'Image info'
    },
   
  ]
  
  //TODO: fox type
  function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
  }
  
  export default function GameField() {
    const shuffledArr = shuffle([...images])

    return (
      <>
      
      <div className="overflow-hidden rounded-lg bg-gray-200 w-4/5 h-4/5 shadow grid grid-cols-4">
        {shuffledArr.map((image: any) => (
          <div
            key={image.title}
            className={classNames(
              'group relative bg-white focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500'
            )}
          >
            <div className="">
                <img src={image.imgHref} alt={image.imageAlt} className="object-cover w-full h-full"/>
            </div>
          </div>
        ))}
      </div>
      </>
    )
  }
  