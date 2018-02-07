[keyword using] [variable Foo] [operator =] [meta ::][type Foo];

[[[[ [meta foo::target](gpu, [[cpu]]) ]]]]
[keyword class] [type&def Foo];

[type void] [def foo]([type Bar]& [def&local x], [type Bar]& [def&local y]) [keyword noexcept];

[type void] [def Foo]([keyword const] [type unsigned] [type char]* [def&local in_bytes], [type char]* [def&local out]);

[meta foo::][qualified&callee&variable bar]();

[type void] [meta X::][qualified&def Y]() {
  [variable x_]->[callee&property Y]([variable&callee A]([keyword this], [operator &][meta B::][qualified&variable C]<[type D], [number 2]>));
  [keyword delete] [[]] [variable baz];
}

[type void] [def foo]([meta ::][type y] [def&local data], [type void]* [def&local arg], [type void] (*[def&local r])([type void]*));

[keyword class] [type&def Z] {
  [keyword typedef] [type void] (*[def&property Bar])([meta x::][type Y] [def&local z], [type void]* [def&local arg]);

 [keyword public]:
  [type Z]& [keyword operator][operator =]([keyword const] [type Z]& [def&local x]);
  [type Z]& [keyword operator][operator =]([type Z]&& [def&local x]);
}

[keyword template] <[type size_t] [def max_size]>
[keyword struct] [type&def Foo] {
  [meta std::][type array]<[type char], [type max_size]> [def&property data];
  [type size_t] [def&property size];
  [type bool] [keyword operator]()([keyword const] [meta std::][type pair]<[type int32], [type double]> & [def&local a]) [keyword override];
  [type void] [def&property foo]() [operator =] [keyword delete];
};

[keyword class] [def&type Foo] : [keyword public] [type Bar] {
  [meta SOME_MACRO]([variable SomethingCapitalized], [variable SomethingCapitalized1]);
  [meta SOME_MACRO]([variable SomethingCapitalized], [variable SomethingCapitalized1]);
  [keyword class] [def&type Baz] {
   [keyword public]:
    [type void] [def&property abc]();
  }
};
[meta SOME_OTHER_MACRO]([variable SomethingThatLooksLikeAType]);

[keyword template] <[keyword typename] [type&def X]>
[keyword inline] [type void] [def Foo]([type&local X]* [def&local x]) {
  [keyword for] ([keyword typename] [meta X::][type iterator] [def&local it] [operator =] [variable-2 x]->[callee&property begin]();
    [variable-2 it] [operator !=] [variable-2 x]->[callee&property end](); [operator ++][variable-2 it])
    [variable&callee Bar]([operator &]([operator *][variable-2 it]));
}

[keyword template] <[keyword typename] [type&def T]>
[keyword inline] [keyword typename] [meta std::][type enable_if]<[meta std::][type is_same]<[type&local T], [type int]>::[type value], [type void]>::[type type]
[def Foo]() {
  [keyword return] [type Foo]{[number 0]} [operator ||] [meta std::][type Foo]{[number 1]};
}
}

[keyword namespace] [def ns] {
[type int] [def x];
[type int] [def y] [operator =] [variable x];
[type void] [meta A::][qualified&def B]() {
  [keyword return] [string R"(foo " ) bar)"] [string "ok"];
}
[type void] [meta X::][qualified&def Y]() {
  [callee&variable B]();
}
}

[keyword if] ([variable foo]) [keyword return] [variable bar];

[keyword const] [type char]* [def s1][[]] [operator =] [string R"foo(]
[string Hello can have "quotes"]
[string World]
[string )foo"];

[keyword using] [variable FooOrder] [operator =] [meta std::][type function]<[type bool]([keyword const] [type Foo]&, [keyword const] [type Foo]&)>;

[meta std::][qualified&variable xyz]<[keyword class] [type foo]>;

[type string] [def xyzzy]([type Bar] [def&local s]) {
  [keyword switch] ([variable-2 s]) {
    [keyword case] [meta Bar::][qualified&variable OK]:
      [keyword return] [string "OK"];
    [keyword case] [meta Bar::][qualified&variable NotOK]:
      [keyword return] [string "NOT OK"];
  }
  [keyword if] ([variable foo] [operator &&]
      [variable foo]) {
    [number 2];
  }
  
}

[[[[ [meta noreturn] ]]]]
[type int] [def sizeofint]() {
  ([variable u])[[ [number 1] ]];
  [keyword return] [keyword sizeof]([type int]);
}
