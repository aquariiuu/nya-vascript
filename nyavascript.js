eval set -- "$code"

(= code "$1")

parse :: char* -> void
void parse(char *buf) {
	match buf {
		/i\'m a good girl/gims => pcall(eval, code),
		_ => eternal death
	}
}

f, err = parse()
