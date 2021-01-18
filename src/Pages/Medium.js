import React, {Component} from 'react'
import axios from 'axios'
import '../App.scss'
import '../AppDesktop.scss'

class Medium extends React.Component {
  constructor(props) {
    super(props);
    this.state = { res:[] };
  }

  getUsersData() {
    axios
        .get(`https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40ayon-b&api_key=o0tojamove3mhpwplnwykx77rloqqs0saao5eqlj`, {})
        .then(res => {
            console.log(res)
            const data = res.data
            console.log(data.items)
            const users = data.items.slice(0,3).map((u,i) =>
              <a id={"post"+i.toString()} className="post" href={u.link}>
                <div className="postImage"><img src={u.thumbnail}/></div>
                <p className="Text">{u.title}</p>
                <div className="blogTags">
                {u.categories.map((a) =>
                  <p className="blogtag">{a}</p>
              )}
                </div>
              </a>
                )

                this.setState({
                    res: users
                })

        })
        .catch((error) => {
            console.log(error)
        })

}
  componentDidMount() {
    this.getUsersData()
    console.log("CDM:")

}

render() {
  return (
    <div className="BlogSection">
      <p className="Title">LATEST MEDIUM POST</p>
        {this.state.res}
    </div>
  )
}
}

export default Medium;
