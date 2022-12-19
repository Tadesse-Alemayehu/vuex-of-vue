# # Method to deal with the names
# def nameInitial(name)
#   if name&&name[0]
#     return name[0].upcase
#   else
#     return ""
#   end
# end

# # Main method
# def letter_avatar(user_hash)
#    return {} if user_hash["id".to_sym].nil?
#    colors = ['red','blue','yellow','green','pink','ambar','black']

#    initials=nameInitial(user_hash["first_names".to_sym]) + nameInitial(user_hash["last_name".to_sym])
#    initials=initials.empty? ? "AV" : initials
#    color= nil

# # Deal with the color finding
#    if colors[user_hash["id".to_sym]-1]
#     color=colors[user_hash["id".to_sym]-1]
#    else
#     mod=user_hash["id".to_sym]%colors.length
#     colors[user_hash["id".to_sym]-1]=colors[mod]
#     color=colors[user_hash["id".to_sym]-1]
#    end

# {initials: initials, color: color}
# end

# p letter_avatar({id: 10})


def format(s)
new_s=s.gsub(/\D/, '')
return new_s if new_s.length<4
mod=new_s.slice!((new_s.length-new_s.length%3),3)

i=3
while i<new_s.length
  new_s.insert(i,"-")
  i+=4
end
if mod.length>1
new_s=new_s+"-"+mod
elsif mod.length==1
  new_s.insert(new_s.length-1, "-")
  new_s+=mod
end
new_s
end
p format('fdsqr4352345kjwer-1')
