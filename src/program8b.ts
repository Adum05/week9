import { User as R } from "./user";

export class Data<R extends Identity> {
    private rows: Map<number, R>;

    constructor() {
        this.rows = new Map<number, R>();
    }

    add(user: R): Promise<void> {
        return new Promise((resolve) => {
            setTimeout(() => {
                this.rows.set(user.id, user);
                resolve();
            }, 100);
        });
    }

    update(number: number, partialUser: Partial<R>): Promise<void> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const user = this.rows.get(number);
                if (user) {
                    const updatedUser = { ...user, ...partialUser };
                    this.rows.set(number, updatedUser as R);
                    resolve();
                } else {
                    reject(new Error(`User with number ${number} does not exist.`));
                }
            }, 200); // Increasing delay for update
        });
    }

    delete(user: R): Promise<void> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (this.rows.has(user.id)) {
                    this.rows.delete(user.id);
                    resolve();
                } else {
                    reject(new Error(`User with number ${user.id} does not exist.`));
                }
            }, 300); // Increasing delay for delete
        });
    }

    get(number: number): Promise<R | undefined> {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(this.rows.get(number));
            }, 100); // Latency for get operation
        });
    }
}



