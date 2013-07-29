var DATA = {
	films: {
		types_label: "Favourite style",
		titles_label: "Favourite movies",
		graph_label: "Most popular movies for a french audience in function of age",
		titles: ["Les bronzés", "Pirates des Caraïbes", "Camping", "Star Wars", "Shrek", "Matrix", "Le Titanic", "Le seigneur des anneaux", "Astérix et Obélix", "Les visiteurs"],
		images: ["films_lesbronzes.png", "films_piratesdescaraibes.png", "films_camping.png", "films_starwars.png", "films_shreck.png", "films_matrix.png", "films_titanic.png", "films_seigneurdesanneaux.png", "films_asterixetobelix.png", "films_lesvisiteurs.png"],
		title_ratios: {
			"ensemble": [16.58, 9.09, 7.49, 7.49, 6.42, 5.88, 19.25, 11.76, 6.42, 9.63],
			"from 15 to 19 years old": [28, 40, 22, 22, 21, 20, 25, 31, 18, 19],
			"from 20 to 24 years old": [26, 32, 13, 26, 19, 24, 28, 35, 17, 15],
			"from 25 to 34 years old": [34, 23, 19, 21, 22, 21, 31, 35, 14, 19],
			" from 34 to 44 years old": [30, 20, 17, 20, 15, 15, 32, 26, 10, 22],
			" from 45 to 54 years old": [32, 13, 13, 13, 11, 9, 39, 19, 11, 23],
			" from 55 to 64 years old": [33, 9, 14, 7, 4, 3, 42, 15, 11, 18],
			" 65 years old and more": [32, 4, 7, 3, 1, 1, 45, 9, 8, 12]
		},
		types: ["Comic", "Action", "Historic", "Polar", "Adventure", "Drama", "Animation", "Thriller", "Author", "Documentary", "Westerns", "Science-fiction", "Love Story", "Musical"],
		type_ratios: [22.80, 16.06, 5.70, 14.51, 8.29, 4.15, 2.59, 2.59, 3.11, 5.18, 3.63, 3.63, 6.22, 1.55]
	},
	musique: {
		types_label: "Frequency",
		titles_label: "Favourite ",
		graph_label: "Repartition of french population in function of Frequency",
		titles: ["No music", "French Songs", "French popular music", "International popular music", "RnB", "Electronic", "Techno", "Rap", "Pop", "Rock", "Jazz", "Classic"],
		images: ["musique.png", "musique.png", "musique.png", "musique.png", "musique.png", "musique.png", "musique.png", "musique.png", "musique.png", "musique.png", "musique.png", "musique.png"],
		title_ratios: {
			"ensemble": [8, 13, 20, 6, 4, 2, 2, 3, 3, 7, 3, 8],
			" from 15 to 19 years old": [0, 1, 5, 4, 16, 8, 7, 16, 4, 16, 1, 1],
			" from 20 to 24 years old": [2, 4, 9, 5, 12, 4, 6, 9, 5, 13, 4, 1],
			" from 25 to 34 years old": [1, 10, 17, 10, 6, 4, 5, 2, 7, 11, 3, 1],
			" from 34 to 44 years old": [2, 11, 24, 10, 3, 1, 2, 1, 6, 9, 3, 4],
			" from 45 to 54 years old": [6, 17, 29, 6, 1, 0, 1, 0, 2, 8, 3, 7],
			" from 55 to 64 years old": [12, 17, 28, 3, 0, 0, 1, 0, 1, 2, 4, 15],
			" 65 years old and more": [24, 18, 18, 2, 0, 0, 0, 0, 0, 1, 3, 19]
		},
		types: ["Every day", "3 or 4 times a week", "once or twice a week", "once or twice a month", "Rarely", "Never"],
		type_ratios: [34, 13, 16, 8, 10, 19]
	},
	livres: {
		types_label: "Favourite genre",
		titles_label: "Favourite author",
		graph_label: "What author people read in France",
		titles: ["JK Rowling", "Dan Brown", "Marc Levy", "Michel Houellebecq", "Danielle Steel", "Amélie Nothomb", "Mary Higgins Clark", "Bernard Werber", "Fred Vargas", "Jean d'Ormesson", "Stephen King", "Zep", "Goscinny"],
		images: ["jkrowling.png","danbrown.png","marclevy.png","michelhouellebecq.png","daniellesteel.png","amelienothomb.png","maryhigginsclark.png","bernardwerber.png","fredvargas.png","jeandormesson.png","stephenking.png","zep.png","goscinny.png"],
		title_ratios: {
			"ensemble": [16, 19, 17, 7, 13, 11, 25, 11, 6, 12, 23, 19, 32],
			" from 15 to 19 years old": [46, 18, 17, 2, 3, 15, 21, 10, 3, 1, 24, 44, 43],
			" from 20 to 24 years old": [27, 24, 24, 3, 9, 17, 29, 18, 5, 2, 38, 33, 45],
			" from 25 to 34 years old": [21, 25, 16, 6, 14, 11, 31, 16, 6, 5, 37, 23, 39],
			" from 34 to 44 years old": [19, 22, 20, 9, 14, 12, 29, 13, 8, 10, 32, 21, 34],
			" from 45 to 54 years old": [14, 23, 19, 8, 13, 12, 26, 13, 7, 13, 22, 18, 37],
			" from 55 to 64 years old": [8, 16, 16, 9, 16, 11, 25, 10, 7, 18, 17, 12, 30],
			" 65 years old and more": [4, 10, 12, 6, 12, 7, 18, 4, 3, 24, 6, 4, 15]
		},
		types: ["Classic Literature ", "Novel", "Polar", "Poem", "Livres sur l'histoire", "Livres de développement personnel", "Reportages d'actualité", "Livres pour enfants", "Mangas", "Bandes dessinées", "Livres d'art", "Essais politiques, philosophiques, religieux", "Livres pratiques", "Livres scientifiques", "Dictionnaires", "Autres"],
		type_ratios: [5.25, 10.20, 11.37, 2.62, 10.20, 4.66, 6.41, 4.96, 2.33, 7.58, 4.66, 4.66, 11.66, 5.25, 6.41, 1.75]
	},
	informatique: {
		types_label: "main uses of the internet",
		titles_label: "Time spent on the computer",
		graph_label: "What french people do on their computer",
		titles: ["less than 3h", "from 3h to 7h", "from 7h to 14h", "from 14h to 21h", "21h and more"],
		images: ["informatique.png", "informatique.png", "informatique.png", "informatique.png", "informatique.png"],
		title_ratios: {
			"ensemble": [22, 18, 25, 15, 19],
			" from 15 to 19 years old": [13, 23, 20, 20, 24],
			" from 20 to 24 years old": [17, 13, 21, 18, 31],
			" from 25 to 34 years old": [18, 17, 28, 16, 20],
			" from 34 to 44 years old": [29, 19, 26, 12, 14],
			" from 45 to 54 years old": [30, 19, 27, 12, 13],
			" from 55 to 64 years old": [23, 22, 25, 16, 14],
			" 65 years old and more": [26, 15, 22, 18, 19]
		},
		types: ["E-mails", "Instant Messaging", "Documentary researches", "Newspapers and Magazines", "Blog-surfing", "Seek practical informations", "Manage personal matter (bank, taxes, pay the bills)", "Buy or order online", "Download softwares, music or else"],
		type_ratios: [16.24, 10.89, 15.50, 7.20, 8.12, 14.76, 10.33, 9.59, 7.38]
	},
	sorties: {
		types_label: "Activities most liked",
		titles_label: "Frequency of the activity",
		graph_label: "Type of the most popular activities for french people",
		titles: ["Several times a week", "Once a week", "2 to 3 times a month", "once a month", "Less often", "Never"],
		images: ["sorties.png", "sorties.png", "sorties.png", "sorties.png", "sorties.png", "sorties.png"],
		title_ratios: {
			"ensemble": [16, 21, 19, 12, 14, 17],
			" from 15 to 19 years old": [36, 30, 12, 7, 9, 5],
			" from 20 to 24 years old": [49, 26, 15, 2, 6, 3],
			" from 25 to 34 years old": [24, 26, 23, 12, 10, 5],
			" from 34 to 44 years old": [13, 23, 25, 15, 16, 8],
			" from 45 to 54 years old": [12, 19, 27, 13, 14, 15],
			" from 55 to 64 years old": [9, 20, 18, 17, 15, 20],
			" 65 years old and more": [4, 10, 11, 11, 20, 44]
		},
		types: ["Au cinéma", "Au spectacle", "Chez des parents", "Chez des amis", "A une réunion autre que familiale ou amicale", "Au restaurant", "Se promener, retrouver des amis dans la rue…", "Aucune de ces sorties"],
		type_ratios: [12.54, 6.97, 14.98, 21.95, 7.67, 17.77, 12.20, 5.92]
	}
};
