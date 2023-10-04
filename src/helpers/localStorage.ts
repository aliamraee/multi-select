export const setStorageData = (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value));

};

export const getStorageData = (key: string, defaultValue: any) => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : defaultValue;

};

