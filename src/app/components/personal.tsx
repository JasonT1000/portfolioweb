import Youtube, { YouTubeProps } from 'react-youtube'

const Personal = () => {
    const opts: YouTubeProps['opts'] = {
        height: '257',
        width: '380'
    }

    return ( 
        <div className="overflow-y-auto h-[600px] w-[800px] slide-in from-left place-content-center scrollbar">
            <h2 className={`mb-3 text-2xl text-center font-semibold`}>
                My Personal Projects{' '}
            </h2>

            <div className="grid text-center lg:mb-0 lg:grid-cols-2 lg:text-left">
                <Youtube videoId='ZNAqwJ7pXmY' opts={opts}/>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo debitis deleniti suscipit! Perspiciatis quam quisquam fuga corporis veritatis sapiente, consectetur iure, nemo praesentium nulla odit mollitia? Recusandae assumenda modi ducimus!
                </p>
            </div>
            <div className="grid text-center lg:mb-0 lg:grid-cols-2 lg:text-left">
                <Youtube videoId='ZNAqwJ7pXmY' opts={opts}/>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo debitis deleniti suscipit! Perspiciatis quam quisquam fuga corporis veritatis sapiente, consectetur iure, nemo praesentium nulla odit mollitia? Recusandae assumenda modi ducimus!
                </p>
            </div>
            <div className="grid text-center lg:mb-0 lg:grid-cols-2 lg:text-left">
                <Youtube videoId='ZNAqwJ7pXmY' opts={opts}/>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo debitis deleniti suscipit! Perspiciatis quam quisquam fuga corporis veritatis sapiente, consectetur iure, nemo praesentium nulla odit mollitia? Recusandae assumenda modi ducimus!
                </p>
            </div>
            <div className="grid text-center lg:mb-0 lg:grid-cols-2 lg:text-left">
                <Youtube videoId='ZNAqwJ7pXmY' opts={opts}/>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo debitis deleniti suscipit! Perspiciatis quam quisquam fuga corporis veritatis sapiente, consectetur iure, nemo praesentium nulla odit mollitia? Recusandae assumenda modi ducimus!
                </p>
            </div>
            <div className="grid text-center lg:mb-0 lg:grid-cols-2 lg:text-left">
                <Youtube videoId='ZNAqwJ7pXmY' opts={opts}/>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo debitis deleniti suscipit! Perspiciatis quam quisquam fuga corporis veritatis sapiente, consectetur iure, nemo praesentium nulla odit mollitia? Recusandae assumenda modi ducimus!
                </p>
            </div>
            <div className="grid text-center lg:mb-0 lg:grid-cols-2 lg:text-left">
                <Youtube videoId='ZNAqwJ7pXmY' opts={opts}/>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo debitis deleniti suscipit! Perspiciatis quam quisquam fuga corporis veritatis sapiente, consectetur iure, nemo praesentium nulla odit mollitia? Recusandae assumenda modi ducimus!
                </p>
            </div>
            <div className="grid text-center lg:mb-0 lg:grid-cols-2 lg:text-left">
                <Youtube videoId='ZNAqwJ7pXmY' opts={opts}/>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo debitis deleniti suscipit! Perspiciatis quam quisquam fuga corporis veritatis sapiente, consectetur iure, nemo praesentium nulla odit mollitia? Recusandae assumenda modi ducimus!
                </p>
            </div>
            <div className="grid text-center lg:mb-0 lg:grid-cols-2 lg:text-left">
                <Youtube videoId='ZNAqwJ7pXmY' opts={opts}/>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                    This is the last paragraph of content
                </p>
            </div>
        </div>
     );
}
 
export default Personal;