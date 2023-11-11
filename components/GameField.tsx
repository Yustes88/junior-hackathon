import Image from "next/image"

const images = [
    {
      title: 'Request time off',
      imgHref: 'https://picsum.photos/500',
      imageAlt: 'Image info'
    },
    {
      title: 'Request time off',
      imgHref: 'https://picsum.photos/500',
      imageAlt: 'Image info'
    },
    {
      title: 'Request time off',
      imgHref: 'https://picsum.photos/500',
      imageAlt: 'Image info'
    },
    {
      title: 'Request time off',
      imgHref: 'https://picsum.photos/500',
      imageAlt: 'Image info'
    },
    {
      title: 'Request time off',
      imgHref: 'https://picsum.photos/500',
      imageAlt: 'Image info'
    },
    {
      title: 'Request time off',
      imgHref: 'https://picsum.photos/500',
      imageAlt: 'Image info'
    },
    {
      title: 'Request time off',
      imgHref: 'https://picsum.photos/500',
      imageAlt: 'Image info'
    },
    {
      title: 'Request time off',
      imgHref: 'https://picsum.photos/500',
      imageAlt: 'Image info'
    },
    {
      title: 'Request time off',
      imgHref: 'https://picsum.photos/500',
      imageAlt: 'Image info'
    },
    {
      title: 'Request time off',
      imgHref: 'https://picsum.photos/500',
      imageAlt: 'Image info'
    },
    {
      title: 'Request time off',
      imgHref: 'https://picsum.photos/500',
      imageAlt: 'Image info'
    },
    {
      title: 'Request time off',
      imgHref: 'https://picsum.photos/500',
      imageAlt: 'Image info'
    },
    {
      title: 'Request time off',
      imgHref: 'https://picsum.photos/500',
      imageAlt: 'Image info'
    },
    {
      title: 'Request time off',
      imgHref: 'https://picsum.photos/500',
      imageAlt: 'Image info'
    },
    {
      title: 'Request time off',
      imgHref: 'https://picsum.photos/500',
      imageAlt: 'Image info'
    },
    {
      title: 'Request time off',
      imgHref: 'https://picsum.photos/500',
      imageAlt: 'Image info'
    },
   
  ]
  
  //TODO: fox type
  function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
  }
  
  export default function GameField() {
    return (
      <>
      
      <div className=" overflow-hidden rounded-lg bg-gray-200 shadow grid grid-cols-4 gap-2">
        {images.map((image, actionIdx) => (
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
  