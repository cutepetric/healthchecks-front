export default async function fetcher(...args) {
    console.log('NEXT_PUBLIC_APIKEY: ');
    console.log(process.env.NEXT_PUBLIC_APIKEY);
    args[0] = process.env.NEXT_PUBLIC_APIBASEURL + args[0];

    args[1] = {
        ...args[1],
        headers: {
            Accept: "application/json",
            "X-Api-Key": process.env.NEXT_PUBLIC_APIKEY,
        },
    };

    const res = await fetch(...args);
    return res.json();
}
