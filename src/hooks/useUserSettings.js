import { useLocalStorage } from 'hooks/useLocalStorage';

const languageKey = 'userLanguage';

/**
 * Custom hook for updating and storing user settings
 * @returns Functions to get and set user settings
 */
export function useUserSettings() {
	const ls = useLocalStorage();

	/**
	 * @returns {"en"|"es"} The language code last selected by the user
	 */
	function getUserLanguage() {
		return ls.get(languageKey);
	}

	/**
	 * @param {"en"|"es"} languageCode
	 */
	function setUserLanguage(languageCode) {
		if (languageCode === 'en' || languageCode === 'es') {
			ls.set(languageKey, languageCode);
		} else {
			console.warn(
				`Invalid language code '${languageCode}' passed to setUserLanguage`
			);
		}
	}

	return { getUserLanguage, setUserLanguage };
}
