class EventEmitter {
	constructor(maxListeners) {
		this.events = {}
		// 设置最大监听数
		this.maxListeners = maxListeners || Infinity
	}

	emit(event, ...args) {
		const cbs = this.events[event]

		if (!cbs) {
			console.warn(`${event} event is not registered`)
			return this
		}

		cbs.forEach(cb => cb.apply(this, args))

		return this
	}

	on(event, cb) {
    // 如果没有这个函数
		if (!this.events[event]) {
			this.events[event] = []
		}

    // 如果设置了最大监听数，并且超过了最大监听数
		if (this.maxListeners !== Infinity && this.events[event].length >= this.maxListeners) {
			console.warn(`${event} has reached max listeners`)
			return
		}

		this.events[event].push(cb)
		return this // 链式调用
	}

	once(event, cb) {
		const func = (...args) => {
			this.off(event, func)
			cb.apply(this, args)
		}

		this.on(event, func)
		return this
	}

	off(event, cb) {
		if (!cb) {
			this.events[event] = null
		} else {
			this.events[event] = this.events[event].filter(item => item !== cb)
		}

		return this
	}
}

const add = (a, b) => console.log(a + b)
const log = (...args) => console.log(...args)
const event = new EventEmitter(3)

event.on('add', add)
// event.on('add', add)
// event.on('add', add)
// event.on('add', add) // add has reached max listeners

event.on('log', log)
event.emit('add', 1, 2) // 3
event.emit('log', 'hi~') // hi~
event.off('add')
event.emit('add', 1, 2) // Error: add event is not registered
event.once('once', add)
event.emit('once', 1, 2) // 3
event.emit('once', 1, 2)
event.emit('once', 1, 2)
