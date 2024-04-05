import React from 'react'

function Tips() {
    return (
        <div id='Tips'>
            <div className={`bg-gradient-to-r from-emerald-500 to-lime-600 py-16 px-4 w-full`} >
                <h1 className='font-bold text-4xl py-2'>How to Grow</h1>
                <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 my-5'>
                    <img src={'https://img.freepik.com/free-photo/closeup-silantro-leaves-garden_53876-74947.jpg?w=740&t=st=1711683375~exp=1711683975~hmac=0ad641c5618295eecfd85d1184ddbe27ebe408fbedfe5b36917ebae42948dc11'} alt="img" />
                    <div className='flex flex-col px-8 item-center justify-center'>
                        <h1 className='font-bold text-3xl'>Growing Coriander Indoors</h1>
                        <p className={` font-mono p-2`}>
                            Step 1:
                            Coriander crop thrives well in temperatures between 17° to 27°C. Coriander is best sown directly in pots rather than growing them in seed trays and then transplanting the sprouts.
                        </p>
                        <p className={`font-mono p-2`}>
                            Step 2:
                            You can grow coriander in full sun and well-drained soil with a pH of 6.2 to 6.8. Sow the coriander seeds about half to one inch deep in the soil. Space the seeds at a gap of approximately 6 inches. Press the soil over the seeds and cover with the half-inch layer of fine mulch. Water thoroughly.

                        </p>
                        <p className={`font-mono p-2`}>
                            Step 3:
                            Water the plants in dry periods. Be sure to not over-water the plant to avoid root rot. Good soil drainage is essential to ensure healthy root health as coriander has deep taproots.

                        </p>
                        <p className={`font-mono p-2`}>
                            Step 4:
                            Germination of coriander takes up to 2-3 weeks. Remember to thin young plants to 20 cm apart to allow them to grow to their full size. To extend the coriander harvest, regularly snip soft stems, rotating the plant while you harvest.
                        </p>
                    </div>
                </div>
                <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 '>
                    <img src={'https://images.unsplash.com/photo-1576045057995-568f588f82fb?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} alt="img" />
                    <div className='flex flex-col px-8 item-center justify-center'>
                        <h1 className='font-bold text-3xl'>Growing Spinach in Kitchen Garden</h1>
                        <p className={` font-mono p-2`}>
                            Step 1- Gather your spinach seeds, gardening tools and let’s head out into the garden. Ensure that the area where you are planning to plant the seeds is a balance of light and shade. Also, make sure that the soil is well-drained with a pH level of 6.5 to 7. You can also make the soil extra rich by additional nutrients in the form of compost or manure.
                        </p>
                        <p className={`font-mono p-2`}>
                            Step 2- It is advisable to sow the seeds half an inch deep into the soil with at least 3” - 4” of space between each seed. This will give the plants room to grow and expand their roots.
                            During the germination process, ensure that the soil is moist to accelerate the process.


                        </p>
                        <p className={`font-mono p-2`}>
                            Step 3 -As soon as the seedlings reach a height of 2”, thin the plants to about 2” - 3”. Always monitor the amount of water you are giving your plants. You have to ensure that the soil remains moist. Do not overwater them. It is advisable to water early in the morning so that the plants can absorb the water throughout the day.
                        </p>
                        <p className={`font-mono p-2`}>
                            Step 4- If maintained properly, your spinach should be ready for the first harvest in about 60 days 45-50 days.
                        </p>
                        <p className={`font-mono p-2`}>
                            Note- Keep an eye on the growth of your plants. You don’t want pests and diseases affecting them. Besides pests and diseases, bolting is another common problem with spinach plants. If your spinach plants are going to seed, they are bolting. This might occur due to too little water, too much sun, or too much heat during the final stages of the growth process. To overcome bolting, you can either pull out the plants immediately otherwise the leaves will become bitter and inedible. Or better yet, you can let your spinach plants to flower, enjoy the beautiful spring blooms and collect the seeds for the next season.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tips