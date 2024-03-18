import { Data } from "./program8b";

async function processUser() {
    const data = new Data();

    try {
        await data.add({ id: 1, name: "Max Verstappen" });
        console.log("User added");

        await data.update(1, { name: "Carlos Sainz" });
        console.log("User updated");

        const user = await data.get(1);
        console.log("User retrieved:", user);

        await data.delete({ id: 1, name: "Checo Perez" });
        console.log("User deleted");
    } catch (error) {
        console.log(error)
    }
}

processUser();