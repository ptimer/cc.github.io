const state = {
	users: [
    {id: 1, name: "Макетош Андрей"},
    {id: 2, name: "Ксюша"},
    {id: 3, name: "Кирпич Илья"},
    {id: 4, name: "Сашка из Владивостока"},
    {id: 5, name: "Server Osmanov"},
  ],

  messages: [
    {text: "Привет", time: "13:37",my: true},
    {text: "Как дела ?", time: "13:37", my: true},
    {text: "Здарова, нормально у тебя как ?", time: "13:37", my: false},
    {text: "Потихоньку", time: "13:37", my: true},
  ]
}

export default state;