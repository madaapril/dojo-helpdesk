async function getTickets(){
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/', {
        next: {
            revalidate: 0
        }
    })

    return res.json();
}

export default async function TicketList() {
    const tickets = await getTickets()

    return (
        <>
            {tickets.map((ticket) => (
                <div key={ticket.id} className="card my-5">
                    <h3>{ticket.title}</h3>
                    <p>{ticket.body.slice(0, 200)}</p>
                    <div className={'pill'}>
                        {ticket.id} ID
                    </div>
                </div>
            ))}

            {tickets.length === 0 && (
                <p className="text-center">There are no open tickets, yay!</p>
            )}
        </>
    )
}