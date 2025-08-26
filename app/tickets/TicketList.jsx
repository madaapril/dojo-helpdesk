import Link from "next/link";

async function getTickets(){
    // imitate delay
    await new Promise(resolve => setTimeout(resolve, 2000))

    const res = await fetch('https://jsonplaceholder.typicode.com/posts/', {
        next: {
            revalidate: 0
        }
    })

    return res.json()
}

export default async function TicketList() {
    const tickets = await getTickets()

    return (
        <>
            {tickets.map((ticket) => (
                <div key={ticket.id} className="card my-5">
                    <Link href={`tickets/${ticket.id}`}>
                            <h3>{ticket.title}</h3>
                            <p>{ticket.body.slice(0, 200)}</p>
                            <div className={'pill'}>
                                {ticket.id} ID
                            </div>
                    </Link>
                </div>
            ))}

            {tickets.length === 0 && (
                <p className="text-center">There are no open tickets, yay!</p>
            )}
        </>
    )
}