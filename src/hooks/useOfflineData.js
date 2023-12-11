import { sanitizeJsonName } from 'utilities/PathUtil';

export function useOfflineData() {
	function getOfflineCategories() {
		console.log('getOfflineCategories');
		const offlineData = require(`assets/offline-data/set-categories.json`);
		return offlineData.categoryList;
	}

	function getOfflineVocab(categoryTitle) {
		console.log('getOfflineVocab');
		if (typeof categoryTitle !== 'string') {
			console.error(
				'Non string argument passed to getOfflineVocab in useOfflineData'
			);
			return;
		}

		let offlineData = null;
		switch (categoryTitle) {
			case 'Around-Town':
			case 'At-the-Office':
			case 'Colors':
			case 'Food':
			case 'Literature':
			case 'Top-50-Verbs':
				offlineData = require(`assets/offline-data/${sanitizeJsonName(
					categoryTitle
				)}.json`);
				return offlineData;
			default:
				console.error(
					'useVocabBox offline error: No vocabulary to match the provided category title: ' +
						categoryTitle
				);
				return;
		}
	}

	return { getOfflineCategories, getOfflineVocab };
}
