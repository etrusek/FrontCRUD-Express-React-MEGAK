export const addToBase = async (title, description) => {
    const reqAnswer = await fetch(`http://localhost:3001/task`, {
        method: 'POST',
        headers: {"Content-Type": "application/json",},
        body: JSON.stringify({
            title,
            description,
        })
    });
    return reqAnswer.json();
}