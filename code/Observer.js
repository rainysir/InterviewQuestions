// 订阅者
class Subject {
  constructor() {
    this.observers = []
    this.state = '123'
  }

  attach(observer) {
    this.observers.push(observer)
  }

  setState(state) {
    this.state = state
    this.observers.forEach(observer => {
      observer.update(this.state)
    })
  }
}

// 观察者
class Observer {
  update(state) {
    console.log(state)
  }
}

const sub = new Subject()
const ob1 = new Observer()
const ob2 = new Observer()

sub.attach(ob1)
sub.attach(ob2)

sub.setState('test')