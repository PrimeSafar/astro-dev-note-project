import { getCollection } from "astro:content";
export async function GET() {
    const notes = await getCollection("notes");
    const simpliied = notes.map((note) => ({
        id: note.id,
        title: note.data.title,
        topic: note.data.topic,
        description: note.data.description || "",
        date: note.data.date,
    }))

    return new Response(JSON.stringify(simpliied),{
        status:200,
        headers:{
            "Content-type": "application/json"
        }
    })
}