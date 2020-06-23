import * as React from 'react'

import DemoWorker from '../../workers/demo.worker'

function Dashboard() {
    // Use ref -----------------------------------------------------------------
    const demoWorker = React.useRef(null)

    // Use state ---------------------------------------------------------------
    const [workerThread, setWorkerThread] = React.useState([])

    // Use effect --------------------------------------------------------------
    React.useEffect(() => {
        demoWorker.current = new DemoWorker()
        demoWorker.current.addEventListener(
            'message',
            (res) => setWorkerThread((prevState) => [res, ...prevState]),
        )
        return () => {
            demoWorker.current.terminate()
            demoWorker.current = undefined
        }
    }, [])

    // Main renderer ===========================================================
    return (
        <>
            <div>
                <h3>Web Worker Demo</h3>
                <button
                    type="button"
                    onClick={() => {
                        const txData = { message: 'Ping!' }
                        setWorkerThread((prevState) => [{ data: txData }, ...prevState])
                        demoWorker.current.postMessage(txData)
                    }}
                >
                    Ping!
                </button>
                <br />
                <code>
                    {workerThread.map((item, itemIndex) => (
                        <code
                            key={itemIndex}
                            style={{ display: 'block' }}
                        >
                            {`${itemIndex % 2 ? '<<<' : '>>>'} ${String(item?.data?.message)}`}
                        </code>
                    ))}
                </code>
            </div>
            <hr />

            <h3>Lorem Ipsum</h3>
            <div>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit labore deleniti, ea consequuntur magnam, atque perspiciatis sit nemo, nulla tempora obcaecati! Nulla officiis reiciendis, officia eos totam temporibus voluptatum molestias, in non quisquam ducimus aliquid nam accusantium deleniti amet dolores rem, ipsum at incidunt natus? Sit veritatis suscipit deserunt, tenetur facilis autem dignissimos consequuntur recusandae, nihil architecto, excepturi maxime molestias inventore ratione? Eligendi neque sed consequatur aspernatur, modi eos. Commodi, a tempore eaque quis magni aspernatur quasi quos molestiae autem libero voluptas eligendi ratione, natus inventore ipsam optio magnam, ex accusamus consequuntur vel omnis nostrum. Consectetur eveniet asperiores quia nisi.
            </div>
            <div>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit labore deleniti, ea consequuntur magnam, atque perspiciatis sit nemo, nulla tempora obcaecati! Nulla officiis reiciendis, officia eos totam temporibus voluptatum molestias, in non quisquam ducimus aliquid nam accusantium deleniti amet dolores rem, ipsum at incidunt natus? Sit veritatis suscipit deserunt, tenetur facilis autem dignissimos consequuntur recusandae, nihil architecto, excepturi maxime molestias inventore ratione? Eligendi neque sed consequatur aspernatur, modi eos. Commodi, a tempore eaque quis magni aspernatur quasi quos molestiae autem libero voluptas eligendi ratione, natus inventore ipsam optio magnam, ex accusamus consequuntur vel omnis nostrum. Consectetur eveniet asperiores quia nisi.
            </div>
            <div>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit labore deleniti, ea consequuntur magnam, atque perspiciatis sit nemo, nulla tempora obcaecati! Nulla officiis reiciendis, officia eos totam temporibus voluptatum molestias, in non quisquam ducimus aliquid nam accusantium deleniti amet dolores rem, ipsum at incidunt natus? Sit veritatis suscipit deserunt, tenetur facilis autem dignissimos consequuntur recusandae, nihil architecto, excepturi maxime molestias inventore ratione? Eligendi neque sed consequatur aspernatur, modi eos. Commodi, a tempore eaque quis magni aspernatur quasi quos molestiae autem libero voluptas eligendi ratione, natus inventore ipsam optio magnam, ex accusamus consequuntur vel omnis nostrum. Consectetur eveniet asperiores quia nisi.
            </div>
            <div>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit labore deleniti, ea consequuntur magnam, atque perspiciatis sit nemo, nulla tempora obcaecati! Nulla officiis reiciendis, officia eos totam temporibus voluptatum molestias, in non quisquam ducimus aliquid nam accusantium deleniti amet dolores rem, ipsum at incidunt natus? Sit veritatis suscipit deserunt, tenetur facilis autem dignissimos consequuntur recusandae, nihil architecto, excepturi maxime molestias inventore ratione? Eligendi neque sed consequatur aspernatur, modi eos. Commodi, a tempore eaque quis magni aspernatur quasi quos molestiae autem libero voluptas eligendi ratione, natus inventore ipsam optio magnam, ex accusamus consequuntur vel omnis nostrum. Consectetur eveniet asperiores quia nisi.
            </div>
            <div>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit labore deleniti, ea consequuntur magnam, atque perspiciatis sit nemo, nulla tempora obcaecati! Nulla officiis reiciendis, officia eos totam temporibus voluptatum molestias, in non quisquam ducimus aliquid nam accusantium deleniti amet dolores rem, ipsum at incidunt natus? Sit veritatis suscipit deserunt, tenetur facilis autem dignissimos consequuntur recusandae, nihil architecto, excepturi maxime molestias inventore ratione? Eligendi neque sed consequatur aspernatur, modi eos. Commodi, a tempore eaque quis magni aspernatur quasi quos molestiae autem libero voluptas eligendi ratione, natus inventore ipsam optio magnam, ex accusamus consequuntur vel omnis nostrum. Consectetur eveniet asperiores quia nisi.
            </div>
            <div>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit labore deleniti, ea consequuntur magnam, atque perspiciatis sit nemo, nulla tempora obcaecati! Nulla officiis reiciendis, officia eos totam temporibus voluptatum molestias, in non quisquam ducimus aliquid nam accusantium deleniti amet dolores rem, ipsum at incidunt natus? Sit veritatis suscipit deserunt, tenetur facilis autem dignissimos consequuntur recusandae, nihil architecto, excepturi maxime molestias inventore ratione? Eligendi neque sed consequatur aspernatur, modi eos. Commodi, a tempore eaque quis magni aspernatur quasi quos molestiae autem libero voluptas eligendi ratione, natus inventore ipsam optio magnam, ex accusamus consequuntur vel omnis nostrum. Consectetur eveniet asperiores quia nisi.
            </div>
            <div>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit labore deleniti, ea consequuntur magnam, atque perspiciatis sit nemo, nulla tempora obcaecati! Nulla officiis reiciendis, officia eos totam temporibus voluptatum molestias, in non quisquam ducimus aliquid nam accusantium deleniti amet dolores rem, ipsum at incidunt natus? Sit veritatis suscipit deserunt, tenetur facilis autem dignissimos consequuntur recusandae, nihil architecto, excepturi maxime molestias inventore ratione? Eligendi neque sed consequatur aspernatur, modi eos. Commodi, a tempore eaque quis magni aspernatur quasi quos molestiae autem libero voluptas eligendi ratione, natus inventore ipsam optio magnam, ex accusamus consequuntur vel omnis nostrum. Consectetur eveniet asperiores quia nisi.
            </div>
            <div>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit labore deleniti, ea consequuntur magnam, atque perspiciatis sit nemo, nulla tempora obcaecati! Nulla officiis reiciendis, officia eos totam temporibus voluptatum molestias, in non quisquam ducimus aliquid nam accusantium deleniti amet dolores rem, ipsum at incidunt natus? Sit veritatis suscipit deserunt, tenetur facilis autem dignissimos consequuntur recusandae, nihil architecto, excepturi maxime molestias inventore ratione? Eligendi neque sed consequatur aspernatur, modi eos. Commodi, a tempore eaque quis magni aspernatur quasi quos molestiae autem libero voluptas eligendi ratione, natus inventore ipsam optio magnam, ex accusamus consequuntur vel omnis nostrum. Consectetur eveniet asperiores quia nisi.
            </div>
            <div>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit labore deleniti, ea consequuntur magnam, atque perspiciatis sit nemo, nulla tempora obcaecati! Nulla officiis reiciendis, officia eos totam temporibus voluptatum molestias, in non quisquam ducimus aliquid nam accusantium deleniti amet dolores rem, ipsum at incidunt natus? Sit veritatis suscipit deserunt, tenetur facilis autem dignissimos consequuntur recusandae, nihil architecto, excepturi maxime molestias inventore ratione? Eligendi neque sed consequatur aspernatur, modi eos. Commodi, a tempore eaque quis magni aspernatur quasi quos molestiae autem libero voluptas eligendi ratione, natus inventore ipsam optio magnam, ex accusamus consequuntur vel omnis nostrum. Consectetur eveniet asperiores quia nisi.
            </div>
            <div>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit labore deleniti, ea consequuntur magnam, atque perspiciatis sit nemo, nulla tempora obcaecati! Nulla officiis reiciendis, officia eos totam temporibus voluptatum molestias, in non quisquam ducimus aliquid nam accusantium deleniti amet dolores rem, ipsum at incidunt natus? Sit veritatis suscipit deserunt, tenetur facilis autem dignissimos consequuntur recusandae, nihil architecto, excepturi maxime molestias inventore ratione? Eligendi neque sed consequatur aspernatur, modi eos. Commodi, a tempore eaque quis magni aspernatur quasi quos molestiae autem libero voluptas eligendi ratione, natus inventore ipsam optio magnam, ex accusamus consequuntur vel omnis nostrum. Consectetur eveniet asperiores quia nisi.
            </div>
            <div>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit labore deleniti, ea consequuntur magnam, atque perspiciatis sit nemo, nulla tempora obcaecati! Nulla officiis reiciendis, officia eos totam temporibus voluptatum molestias, in non quisquam ducimus aliquid nam accusantium deleniti amet dolores rem, ipsum at incidunt natus? Sit veritatis suscipit deserunt, tenetur facilis autem dignissimos consequuntur recusandae, nihil architecto, excepturi maxime molestias inventore ratione? Eligendi neque sed consequatur aspernatur, modi eos. Commodi, a tempore eaque quis magni aspernatur quasi quos molestiae autem libero voluptas eligendi ratione, natus inventore ipsam optio magnam, ex accusamus consequuntur vel omnis nostrum. Consectetur eveniet asperiores quia nisi.
            </div>
            <div>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit labore deleniti, ea consequuntur magnam, atque perspiciatis sit nemo, nulla tempora obcaecati! Nulla officiis reiciendis, officia eos totam temporibus voluptatum molestias, in non quisquam ducimus aliquid nam accusantium deleniti amet dolores rem, ipsum at incidunt natus? Sit veritatis suscipit deserunt, tenetur facilis autem dignissimos consequuntur recusandae, nihil architecto, excepturi maxime molestias inventore ratione? Eligendi neque sed consequatur aspernatur, modi eos. Commodi, a tempore eaque quis magni aspernatur quasi quos molestiae autem libero voluptas eligendi ratione, natus inventore ipsam optio magnam, ex accusamus consequuntur vel omnis nostrum. Consectetur eveniet asperiores quia nisi.
            </div>
            <div>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit labore deleniti, ea consequuntur magnam, atque perspiciatis sit nemo, nulla tempora obcaecati! Nulla officiis reiciendis, officia eos totam temporibus voluptatum molestias, in non quisquam ducimus aliquid nam accusantium deleniti amet dolores rem, ipsum at incidunt natus? Sit veritatis suscipit deserunt, tenetur facilis autem dignissimos consequuntur recusandae, nihil architecto, excepturi maxime molestias inventore ratione? Eligendi neque sed consequatur aspernatur, modi eos. Commodi, a tempore eaque quis magni aspernatur quasi quos molestiae autem libero voluptas eligendi ratione, natus inventore ipsam optio magnam, ex accusamus consequuntur vel omnis nostrum. Consectetur eveniet asperiores quia nisi.
            </div>
            <div>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit labore deleniti, ea consequuntur magnam, atque perspiciatis sit nemo, nulla tempora obcaecati! Nulla officiis reiciendis, officia eos totam temporibus voluptatum molestias, in non quisquam ducimus aliquid nam accusantium deleniti amet dolores rem, ipsum at incidunt natus? Sit veritatis suscipit deserunt, tenetur facilis autem dignissimos consequuntur recusandae, nihil architecto, excepturi maxime molestias inventore ratione? Eligendi neque sed consequatur aspernatur, modi eos. Commodi, a tempore eaque quis magni aspernatur quasi quos molestiae autem libero voluptas eligendi ratione, natus inventore ipsam optio magnam, ex accusamus consequuntur vel omnis nostrum. Consectetur eveniet asperiores quia nisi.
            </div>
            <div>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit labore deleniti, ea consequuntur magnam, atque perspiciatis sit nemo, nulla tempora obcaecati! Nulla officiis reiciendis, officia eos totam temporibus voluptatum molestias, in non quisquam ducimus aliquid nam accusantium deleniti amet dolores rem, ipsum at incidunt natus? Sit veritatis suscipit deserunt, tenetur facilis autem dignissimos consequuntur recusandae, nihil architecto, excepturi maxime molestias inventore ratione? Eligendi neque sed consequatur aspernatur, modi eos. Commodi, a tempore eaque quis magni aspernatur quasi quos molestiae autem libero voluptas eligendi ratione, natus inventore ipsam optio magnam, ex accusamus consequuntur vel omnis nostrum. Consectetur eveniet asperiores quia nisi.
            </div>
            <div>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit labore deleniti, ea consequuntur magnam, atque perspiciatis sit nemo, nulla tempora obcaecati! Nulla officiis reiciendis, officia eos totam temporibus voluptatum molestias, in non quisquam ducimus aliquid nam accusantium deleniti amet dolores rem, ipsum at incidunt natus? Sit veritatis suscipit deserunt, tenetur facilis autem dignissimos consequuntur recusandae, nihil architecto, excepturi maxime molestias inventore ratione? Eligendi neque sed consequatur aspernatur, modi eos. Commodi, a tempore eaque quis magni aspernatur quasi quos molestiae autem libero voluptas eligendi ratione, natus inventore ipsam optio magnam, ex accusamus consequuntur vel omnis nostrum. Consectetur eveniet asperiores quia nisi.
            </div>
            <div>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit labore deleniti, ea consequuntur magnam, atque perspiciatis sit nemo, nulla tempora obcaecati! Nulla officiis reiciendis, officia eos totam temporibus voluptatum molestias, in non quisquam ducimus aliquid nam accusantium deleniti amet dolores rem, ipsum at incidunt natus? Sit veritatis suscipit deserunt, tenetur facilis autem dignissimos consequuntur recusandae, nihil architecto, excepturi maxime molestias inventore ratione? Eligendi neque sed consequatur aspernatur, modi eos. Commodi, a tempore eaque quis magni aspernatur quasi quos molestiae autem libero voluptas eligendi ratione, natus inventore ipsam optio magnam, ex accusamus consequuntur vel omnis nostrum. Consectetur eveniet asperiores quia nisi.
            </div>
            <div>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit labore deleniti, ea consequuntur magnam, atque perspiciatis sit nemo, nulla tempora obcaecati! Nulla officiis reiciendis, officia eos totam temporibus voluptatum molestias, in non quisquam ducimus aliquid nam accusantium deleniti amet dolores rem, ipsum at incidunt natus? Sit veritatis suscipit deserunt, tenetur facilis autem dignissimos consequuntur recusandae, nihil architecto, excepturi maxime molestias inventore ratione? Eligendi neque sed consequatur aspernatur, modi eos. Commodi, a tempore eaque quis magni aspernatur quasi quos molestiae autem libero voluptas eligendi ratione, natus inventore ipsam optio magnam, ex accusamus consequuntur vel omnis nostrum. Consectetur eveniet asperiores quia nisi.
            </div>
            <div>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit labore deleniti, ea consequuntur magnam, atque perspiciatis sit nemo, nulla tempora obcaecati! Nulla officiis reiciendis, officia eos totam temporibus voluptatum molestias, in non quisquam ducimus aliquid nam accusantium deleniti amet dolores rem, ipsum at incidunt natus? Sit veritatis suscipit deserunt, tenetur facilis autem dignissimos consequuntur recusandae, nihil architecto, excepturi maxime molestias inventore ratione? Eligendi neque sed consequatur aspernatur, modi eos. Commodi, a tempore eaque quis magni aspernatur quasi quos molestiae autem libero voluptas eligendi ratione, natus inventore ipsam optio magnam, ex accusamus consequuntur vel omnis nostrum. Consectetur eveniet asperiores quia nisi.
            </div>
            <div>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit labore deleniti, ea consequuntur magnam, atque perspiciatis sit nemo, nulla tempora obcaecati! Nulla officiis reiciendis, officia eos totam temporibus voluptatum molestias, in non quisquam ducimus aliquid nam accusantium deleniti amet dolores rem, ipsum at incidunt natus? Sit veritatis suscipit deserunt, tenetur facilis autem dignissimos consequuntur recusandae, nihil architecto, excepturi maxime molestias inventore ratione? Eligendi neque sed consequatur aspernatur, modi eos. Commodi, a tempore eaque quis magni aspernatur quasi quos molestiae autem libero voluptas eligendi ratione, natus inventore ipsam optio magnam, ex accusamus consequuntur vel omnis nostrum. Consectetur eveniet asperiores quia nisi.
            </div>
        </>
    )
}

export default Dashboard
