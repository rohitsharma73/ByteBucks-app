import React from 'react'

function Tips() {
    return (
        <div id='Tips'>
            <div className={`bg-gradient-to-r from-emerald-500 to-lime-600 py-16 px-4 w-full`} >
                <h1 className='font-bold text-4xl py-2'>How to Grow</h1>
                <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 '>
                    <img src={'https://as2.ftcdn.net/v2/jpg/03/33/15/11/1000_F_333151146_VzArZywEelEvLwA6IPd8FMp7cL0WwXVI.jpg'} alt="img" />
                    <div className='flex flex-col px-8 item-center justify-center'>
                        <h1 className='font-bold text-3xl'>Growing Coriander Indoors</h1>
                        <p className={` font-mono`}>
                            Step 1:
                            Coriander crop thrives well in temperatures between 17° to 27°C. Coriander is best sown directly in pots rather than growing them in seed trays and then transplanting the sprouts.
                        </p>
                        <p className={`font-mono`}>
                            Step 2:
                            You can grow coriander in full sun and well-drained soil with a pH of 6.2 to 6.8. Sow the coriander seeds about half to one inch deep in the soil. Space the seeds at a gap of approximately 6 inches. Press the soil over the seeds and cover with the half-inch layer of fine mulch. Water thoroughly.

                        </p>
                        <p className={`font-mono`}>
                            Step 3:
                            Water the plants in dry periods. Be sure to not over-water the plant to avoid root rot. Good soil drainage is essential to ensure healthy root health as coriander has deep taproots.

                        </p>
                        <p className={`font-mono`}>
                            Step 4:
                            Germination of coriander takes up to 2-3 weeks. Remember to thin young plants to 20 cm apart to allow them to grow to their full size. To extend the coriander harvest, regularly snip soft stems, rotating the plant while you harvest.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tips