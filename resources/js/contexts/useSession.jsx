import { 
  useState,
  useEffect
} from 'react'

export default function useSession(key, defaultValue) {
  const [value, setValue] = useState();

  useEffect(() => {
    loadSession();
  }, []);

  const loadSession = async () => {
    const session = await JSON.parse(localStorage.getItem(key));
    setValue(session || defaultValue);

  }

  const setValueToSession = (newValue) => {
    setValue((currentValue) => {
      const result = typeof newValue === 'function' ? newValue(currentValue) : newValue;
      localStorage.setItem(key, JSON.stringify(result));

      return result
    })
  }

  return [value, setValueToSession]
}