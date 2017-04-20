/**
 * Created by Moiz.Kachwala on 16-06-2016.
 */

interface Read<T> {
    findOne: (username: string, callback: (error: any, result: T ) => void) => void;
}

export = Read;