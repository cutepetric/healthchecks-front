export default async function fetcher(...args) {
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
