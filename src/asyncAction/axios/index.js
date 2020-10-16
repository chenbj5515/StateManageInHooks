let i = 0;
export default {
    get() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({
                    status: 200,
                    data: {
                        data: [
                            {title: `震惊，XXX竟XXX，全X人都X了${i++}`},
                            {title: `震惊，XXX竟XXX，全X人都X了${i++}`},
                            {title: `震惊，XXX竟XXX，全X人都X了${i++}`}
                        ]
                    }
                })
            }, 1000)
        })
    }
}