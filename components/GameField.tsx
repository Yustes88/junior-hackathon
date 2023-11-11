const images = [
    {
      title: 'Request time off',
    },
    {
      title: 'Benefits',
    },
    {
      title: 'Schedule a one-on-one',
    },
    {
      title: 'Payroll',
    },
    {
      title: 'Submit an expense',
    },
    {
      title: 'Training',
    },
    {
      title: 'Training',
    },
    {
      title: 'Training',
    },
    {
      title: 'Training',
    },
    {
      title: 'Training',
    },
    {
      title: 'Training',
    },
    {
      title: 'Training',
    },
    {
      title: 'Training',
    },
    {
      title: 'Training',
    },
    {
      title: 'Training',
    },
    {
      title: 'Training',
    },
  ]
  
  //TODO: fox type
  function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
  }
  
  export default function GameField() {
    return (
      <div className=" overflow-hidden rounded-lg bg-gray-200 shadow grid grid-cols-4 gap-2">
        {images.map((image, actionIdx) => (
          <div
            key={image.title}
            className={classNames(
              'group relative bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500'
            )}
          >
            <div className="mt-8">
              <p className="mt-2 text-sm text-gray-500">
                Test
              </p>
            </div>
          </div>
        ))}
      </div>
    )
  }
  