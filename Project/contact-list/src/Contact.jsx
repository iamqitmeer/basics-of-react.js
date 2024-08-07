const Contacts = [
  {
    name: "John Doe",
    displayMessage: "Hey there! I am using this app.",
    profileImage: "https://plus.unsplash.com/premium_photo-1683140621573-233422bfc7f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMGltYWdlfGVufDB8fDB8fHww",
    isActive: true
  },
  {
    name: "Jane Smith",
    displayMessage: "Busy at the moment.",
    profileImage: "https://images.unsplash.com/photo-1669475535978-7479ef74e14f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2ZpbGUlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D",
    isActive: false
  },
  {
    name: "Alice Johnson",
    displayMessage: "Loving the weather today!",
    profileImage: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZSUyMGltYWdlfGVufDB8fDB8fHww",
    isActive: true
  },
  {
    name: "Bob Brown",
    displayMessage: "Can't talk, text only.",
    profileImage: "https://images.unsplash.com/photo-1669475616380-ecb159b790d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2ZpbGUlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D",
    isActive: true
  },
  {
    name: "Charlie Davis",
    displayMessage: "At work, please don't disturb.",
    profileImage: "https://images.unsplash.com/photo-1669475535925-a011d7c31d45?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMGltYWdlfGVufDB8fDB8fHww",
    isActive: false
  },
  {
    name: "David Wilson",
    displayMessage: "Feeling great!",
    profileImage: "https://images.unsplash.com/photo-1722322426803-101270837197?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2ZpbGUlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D",
    isActive: true
  },
  {
    name: "Eve Thompson",
    displayMessage: "In a meeting.",
    profileImage: "https://plus.unsplash.com/premium_photo-1670006626907-83c7d89e320f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2ZpbGUlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D",
    isActive: false
  },
  {
    name: "Frank Garcia",
    displayMessage: "Available for a chat.",
    profileImage: "https://plus.unsplash.com/premium_photo-1664536392779-049ba8fde933?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2ZpbGUlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D",
    isActive: true
  },
  {
    name: "Grace Martinez",
    displayMessage: "On vacation.",
    profileImage: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHByb2ZpbGUlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D",
    isActive: false
  },
  {
    name: "Hank Lee",
    displayMessage: "Listening to music.",
    profileImage: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHByb2ZpbGUlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D",
    isActive: true
  },
  {
    name: "Ivy Walker",
    displayMessage: "Reading a book.",
    profileImage: "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHByb2ZpbGUlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D",
    isActive: true
  },
  {
    name: "Jack White",
    displayMessage: "Feeling sleepy.",
    profileImage: "https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHByb2ZpbGUlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D",
    isActive: false
  },
  {
    name: "Karen Young",
    displayMessage: "Cooking dinner.",
    profileImage: "https://images.unsplash.com/photo-1505033575518-a36ea2ef75ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHByb2ZpbGUlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D",
    isActive: true
  },
  {
    name: "Leo King",
    displayMessage: "Watching a movie.",
    profileImage: "https://images.unsplash.com/photo-1503235930437-8c6293ba41f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHByb2ZpbGUlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D",
    isActive: false
  },
  {
    name: "Mia Scott",
    displayMessage: "Out with friends.",
    profileImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHByb2ZpbGUlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D",
    isActive: true
  },
  {
    name: "Nick Allen",
    displayMessage: "At the gym.",
    profileImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fHByb2ZpbGUlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D",
    isActive: false
  },
  {
    name: "Olivia Baker",
    displayMessage: "Shopping.",
    profileImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fHByb2ZpbGUlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D",
    isActive: true
  },
  {
    name: "Paul Carter",
    displayMessage: "Working from home.",
    profileImage: "https://images.unsplash.com/photo-1583243552802-94ccb4200150?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fHByb2ZpbGUlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D",
    isActive: false
  },
  {
    name: "Quinn Wright",
    displayMessage: "Having lunch.",
    profileImage: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fHByb2ZpbGUlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D",
    isActive: true
  },
  {
    name: "Rachel Lopez",
    displayMessage: "In a meeting.",
    profileImage: "https://plus.unsplash.com/premium_photo-1661918391309-7ddd44addee6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fHByb2ZpbGUlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D",
    isActive: false
  },
  {
    name: "Sam Rogers",
    displayMessage: "At the park.",
    profileImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fHByb2ZpbGUlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D",
    isActive: true
  },
  {
    name: "Tina Phillips",
    displayMessage: "Cleaning the house.",
    profileImage: "https://images.unsplash.com/photo-1540174401473-df5f1c06c716?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fHByb2ZpbGUlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D",
    isActive: false
  },
  {
    name: "Uma Harris",
    displayMessage: "Watching TV.",
    profileImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fHByb2ZpbGUlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D",
    isActive: true
  },
  {
    name: "Victor Clark",
    displayMessage: "Sleeping.",
    profileImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fHByb2ZpbGUlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D",
    isActive: false
  },
  {
    name: "Wendy Morris",
    displayMessage: "On a call.",
    profileImage: "https://plus.unsplash.com/premium_photo-1671656349076-0a8ebbb706fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fHByb2ZpbGUlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D",
    isActive: true
  },
  {
    name: "Xander Adams",
    displayMessage: "Playing video games.",
    profileImage: "https://images.unsplash.com/photo-1619539465730-fea9ebf950f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fHByb2ZpbGUlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D",
    isActive: false
  },
  {
    name: "Yvonne Butler",
    displayMessage: "Working on a project.",
    profileImage: "https://images.unsplash.com/photo-1564222576620-3fc4b6f6bb95?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fHByb2ZpbGUlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D",
    isActive: true
  },
  {
    name: "Zoe Nelson",
    displayMessage: "Enjoying the day.",
    profileImage: "https://images.unsplash.com/photo-1503235930437-8c6293ba41f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHByb2ZpbGUlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D",
    isActive: false
  }
];

export default Contacts